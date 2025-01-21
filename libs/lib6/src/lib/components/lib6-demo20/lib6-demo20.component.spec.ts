import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib6Demo20Component } from './lib6-demo20.component';

describe('Lib6Demo20Component', () => {
  let component: Lib6Demo20Component;
  let fixture: ComponentFixture<Lib6Demo20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib6Demo20Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib6Demo20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
