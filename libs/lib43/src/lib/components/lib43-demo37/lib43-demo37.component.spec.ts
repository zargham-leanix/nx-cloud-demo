import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib43Demo37Component } from './lib43-demo37.component';

describe('Lib43Demo37Component', () => {
  let component: Lib43Demo37Component;
  let fixture: ComponentFixture<Lib43Demo37Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib43Demo37Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib43Demo37Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
