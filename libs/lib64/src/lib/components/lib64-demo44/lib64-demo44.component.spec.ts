import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib64Demo44Component } from './lib64-demo44.component';

describe('Lib64Demo44Component', () => {
  let component: Lib64Demo44Component;
  let fixture: ComponentFixture<Lib64Demo44Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib64Demo44Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib64Demo44Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
