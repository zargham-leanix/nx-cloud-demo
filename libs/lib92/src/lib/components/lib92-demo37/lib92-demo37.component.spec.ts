import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib92Demo37Component } from './lib92-demo37.component';

describe('Lib92Demo37Component', () => {
  let component: Lib92Demo37Component;
  let fixture: ComponentFixture<Lib92Demo37Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib92Demo37Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib92Demo37Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
