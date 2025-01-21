import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib43Demo17Component } from './lib43-demo17.component';

describe('Lib43Demo17Component', () => {
  let component: Lib43Demo17Component;
  let fixture: ComponentFixture<Lib43Demo17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib43Demo17Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib43Demo17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
