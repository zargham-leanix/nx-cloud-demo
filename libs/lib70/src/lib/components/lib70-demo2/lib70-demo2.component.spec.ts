import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib70Demo2Component } from './lib70-demo2.component';

describe('Lib70Demo2Component', () => {
  let component: Lib70Demo2Component;
  let fixture: ComponentFixture<Lib70Demo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib70Demo2Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib70Demo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
