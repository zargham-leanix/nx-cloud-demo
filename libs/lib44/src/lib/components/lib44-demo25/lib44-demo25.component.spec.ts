import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib44Demo25Component } from './lib44-demo25.component';

describe('Lib44Demo25Component', () => {
  let component: Lib44Demo25Component;
  let fixture: ComponentFixture<Lib44Demo25Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib44Demo25Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib44Demo25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
