import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib64Demo13Component } from './lib64-demo13.component';

describe('Lib64Demo13Component', () => {
  let component: Lib64Demo13Component;
  let fixture: ComponentFixture<Lib64Demo13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib64Demo13Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib64Demo13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
