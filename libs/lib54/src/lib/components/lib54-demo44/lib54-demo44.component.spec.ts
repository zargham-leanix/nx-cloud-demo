import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib54Demo44Component } from './lib54-demo44.component';

describe('Lib54Demo44Component', () => {
  let component: Lib54Demo44Component;
  let fixture: ComponentFixture<Lib54Demo44Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib54Demo44Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib54Demo44Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
