import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib44Demo23Component } from './lib44-demo23.component';

describe('Lib44Demo23Component', () => {
  let component: Lib44Demo23Component;
  let fixture: ComponentFixture<Lib44Demo23Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib44Demo23Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib44Demo23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
