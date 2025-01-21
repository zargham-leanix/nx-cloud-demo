import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib96Demo4Component } from './lib96-demo4.component';

describe('Lib96Demo4Component', () => {
  let component: Lib96Demo4Component;
  let fixture: ComponentFixture<Lib96Demo4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib96Demo4Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib96Demo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
