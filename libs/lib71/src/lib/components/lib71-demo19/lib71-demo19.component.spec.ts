import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib71Demo19Component } from './lib71-demo19.component';

describe('Lib71Demo19Component', () => {
  let component: Lib71Demo19Component;
  let fixture: ComponentFixture<Lib71Demo19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib71Demo19Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib71Demo19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
