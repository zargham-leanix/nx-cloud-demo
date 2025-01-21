import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib44Demo31Component } from './lib44-demo31.component';

describe('Lib44Demo31Component', () => {
  let component: Lib44Demo31Component;
  let fixture: ComponentFixture<Lib44Demo31Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib44Demo31Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib44Demo31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
