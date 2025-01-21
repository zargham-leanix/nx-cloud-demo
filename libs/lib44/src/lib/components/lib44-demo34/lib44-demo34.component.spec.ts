import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib44Demo34Component } from './lib44-demo34.component';

describe('Lib44Demo34Component', () => {
  let component: Lib44Demo34Component;
  let fixture: ComponentFixture<Lib44Demo34Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib44Demo34Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib44Demo34Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
