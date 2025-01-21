import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib70Demo20Component } from './lib70-demo20.component';

describe('Lib70Demo20Component', () => {
  let component: Lib70Demo20Component;
  let fixture: ComponentFixture<Lib70Demo20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib70Demo20Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib70Demo20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
