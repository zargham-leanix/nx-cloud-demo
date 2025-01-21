import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib91Demo44Component } from './lib91-demo44.component';

describe('Lib91Demo44Component', () => {
  let component: Lib91Demo44Component;
  let fixture: ComponentFixture<Lib91Demo44Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib91Demo44Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib91Demo44Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
