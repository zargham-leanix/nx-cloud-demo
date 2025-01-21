import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib54Demo19Component } from './lib54-demo19.component';

describe('Lib54Demo19Component', () => {
  let component: Lib54Demo19Component;
  let fixture: ComponentFixture<Lib54Demo19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib54Demo19Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib54Demo19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
