import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib2Demo37Component } from './lib2-demo37.component';

describe('Lib2Demo37Component', () => {
  let component: Lib2Demo37Component;
  let fixture: ComponentFixture<Lib2Demo37Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib2Demo37Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib2Demo37Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
