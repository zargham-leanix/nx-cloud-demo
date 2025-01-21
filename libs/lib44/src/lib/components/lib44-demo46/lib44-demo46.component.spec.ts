import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib44Demo46Component } from './lib44-demo46.component';

describe('Lib44Demo46Component', () => {
  let component: Lib44Demo46Component;
  let fixture: ComponentFixture<Lib44Demo46Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib44Demo46Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib44Demo46Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
