import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib80Demo19Component } from './lib80-demo19.component';

describe('Lib80Demo19Component', () => {
  let component: Lib80Demo19Component;
  let fixture: ComponentFixture<Lib80Demo19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib80Demo19Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib80Demo19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
