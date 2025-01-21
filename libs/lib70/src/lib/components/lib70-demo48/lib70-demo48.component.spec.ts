import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib70Demo48Component } from './lib70-demo48.component';

describe('Lib70Demo48Component', () => {
  let component: Lib70Demo48Component;
  let fixture: ComponentFixture<Lib70Demo48Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib70Demo48Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib70Demo48Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
