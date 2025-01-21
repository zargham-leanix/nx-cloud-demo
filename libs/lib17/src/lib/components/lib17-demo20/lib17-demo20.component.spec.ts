import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib17Demo20Component } from './lib17-demo20.component';

describe('Lib17Demo20Component', () => {
  let component: Lib17Demo20Component;
  let fixture: ComponentFixture<Lib17Demo20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib17Demo20Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib17Demo20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
