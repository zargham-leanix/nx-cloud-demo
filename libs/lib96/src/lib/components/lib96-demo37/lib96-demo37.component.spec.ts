import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib96Demo37Component } from './lib96-demo37.component';

describe('Lib96Demo37Component', () => {
  let component: Lib96Demo37Component;
  let fixture: ComponentFixture<Lib96Demo37Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib96Demo37Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib96Demo37Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
