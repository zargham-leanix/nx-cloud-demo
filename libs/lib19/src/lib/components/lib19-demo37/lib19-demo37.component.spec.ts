import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib19Demo37Component } from './lib19-demo37.component';

describe('Lib19Demo37Component', () => {
  let component: Lib19Demo37Component;
  let fixture: ComponentFixture<Lib19Demo37Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib19Demo37Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib19Demo37Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
