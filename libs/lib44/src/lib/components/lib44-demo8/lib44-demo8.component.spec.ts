import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib44Demo8Component } from './lib44-demo8.component';

describe('Lib44Demo8Component', () => {
  let component: Lib44Demo8Component;
  let fixture: ComponentFixture<Lib44Demo8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib44Demo8Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib44Demo8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
