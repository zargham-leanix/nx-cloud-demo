import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib96Demo48Component } from './lib96-demo48.component';

describe('Lib96Demo48Component', () => {
  let component: Lib96Demo48Component;
  let fixture: ComponentFixture<Lib96Demo48Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib96Demo48Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib96Demo48Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
