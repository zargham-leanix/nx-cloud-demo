import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib96Demo3Component } from './lib96-demo3.component';

describe('Lib96Demo3Component', () => {
  let component: Lib96Demo3Component;
  let fixture: ComponentFixture<Lib96Demo3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib96Demo3Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib96Demo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
