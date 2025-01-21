import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib96Demo35Component } from './lib96-demo35.component';

describe('Lib96Demo35Component', () => {
  let component: Lib96Demo35Component;
  let fixture: ComponentFixture<Lib96Demo35Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib96Demo35Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib96Demo35Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
