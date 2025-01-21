import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib75Demo19Component } from './lib75-demo19.component';

describe('Lib75Demo19Component', () => {
  let component: Lib75Demo19Component;
  let fixture: ComponentFixture<Lib75Demo19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib75Demo19Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib75Demo19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
