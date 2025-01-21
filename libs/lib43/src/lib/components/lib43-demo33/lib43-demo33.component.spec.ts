import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib43Demo33Component } from './lib43-demo33.component';

describe('Lib43Demo33Component', () => {
  let component: Lib43Demo33Component;
  let fixture: ComponentFixture<Lib43Demo33Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib43Demo33Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib43Demo33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
