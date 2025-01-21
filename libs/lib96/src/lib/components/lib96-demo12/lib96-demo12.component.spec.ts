import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib96Demo12Component } from './lib96-demo12.component';

describe('Lib96Demo12Component', () => {
  let component: Lib96Demo12Component;
  let fixture: ComponentFixture<Lib96Demo12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib96Demo12Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib96Demo12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
