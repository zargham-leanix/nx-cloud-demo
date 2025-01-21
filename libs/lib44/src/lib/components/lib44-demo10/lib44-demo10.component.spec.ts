import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib44Demo10Component } from './lib44-demo10.component';

describe('Lib44Demo10Component', () => {
  let component: Lib44Demo10Component;
  let fixture: ComponentFixture<Lib44Demo10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib44Demo10Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib44Demo10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
