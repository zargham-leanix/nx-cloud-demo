import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib72Demo4Component } from './lib72-demo4.component';

describe('Lib72Demo4Component', () => {
  let component: Lib72Demo4Component;
  let fixture: ComponentFixture<Lib72Demo4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib72Demo4Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib72Demo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
