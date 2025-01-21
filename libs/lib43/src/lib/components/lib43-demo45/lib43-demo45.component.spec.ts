import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib43Demo45Component } from './lib43-demo45.component';

describe('Lib43Demo45Component', () => {
  let component: Lib43Demo45Component;
  let fixture: ComponentFixture<Lib43Demo45Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib43Demo45Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib43Demo45Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
