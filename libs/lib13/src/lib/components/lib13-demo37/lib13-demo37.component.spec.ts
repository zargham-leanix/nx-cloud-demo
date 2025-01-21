import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib13Demo37Component } from './lib13-demo37.component';

describe('Lib13Demo37Component', () => {
  let component: Lib13Demo37Component;
  let fixture: ComponentFixture<Lib13Demo37Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib13Demo37Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib13Demo37Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
