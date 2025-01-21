import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib72Demo19Component } from './lib72-demo19.component';

describe('Lib72Demo19Component', () => {
  let component: Lib72Demo19Component;
  let fixture: ComponentFixture<Lib72Demo19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib72Demo19Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib72Demo19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
