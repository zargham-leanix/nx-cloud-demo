import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib43Demo43Component } from './lib43-demo43.component';

describe('Lib43Demo43Component', () => {
  let component: Lib43Demo43Component;
  let fixture: ComponentFixture<Lib43Demo43Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib43Demo43Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib43Demo43Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
