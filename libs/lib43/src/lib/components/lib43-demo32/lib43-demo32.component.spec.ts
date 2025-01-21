import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib43Demo32Component } from './lib43-demo32.component';

describe('Lib43Demo32Component', () => {
  let component: Lib43Demo32Component;
  let fixture: ComponentFixture<Lib43Demo32Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib43Demo32Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib43Demo32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
