import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib15Demo4Component } from './lib15-demo4.component';

describe('Lib15Demo4Component', () => {
  let component: Lib15Demo4Component;
  let fixture: ComponentFixture<Lib15Demo4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib15Demo4Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib15Demo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
