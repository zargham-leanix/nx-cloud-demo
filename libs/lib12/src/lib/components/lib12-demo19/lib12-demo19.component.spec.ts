import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib12Demo19Component } from './lib12-demo19.component';

describe('Lib12Demo19Component', () => {
  let component: Lib12Demo19Component;
  let fixture: ComponentFixture<Lib12Demo19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib12Demo19Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib12Demo19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
