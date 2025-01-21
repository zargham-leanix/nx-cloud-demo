import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib29Demo19Component } from './lib29-demo19.component';

describe('Lib29Demo19Component', () => {
  let component: Lib29Demo19Component;
  let fixture: ComponentFixture<Lib29Demo19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib29Demo19Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib29Demo19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
