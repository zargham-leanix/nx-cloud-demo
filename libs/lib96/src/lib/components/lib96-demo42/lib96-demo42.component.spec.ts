import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib96Demo42Component } from './lib96-demo42.component';

describe('Lib96Demo42Component', () => {
  let component: Lib96Demo42Component;
  let fixture: ComponentFixture<Lib96Demo42Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib96Demo42Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib96Demo42Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
