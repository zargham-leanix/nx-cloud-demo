import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib44Demo19Component } from './lib44-demo19.component';

describe('Lib44Demo19Component', () => {
  let component: Lib44Demo19Component;
  let fixture: ComponentFixture<Lib44Demo19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib44Demo19Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib44Demo19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
