import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib6Demo15Component } from './lib6-demo15.component';

describe('Lib6Demo15Component', () => {
  let component: Lib6Demo15Component;
  let fixture: ComponentFixture<Lib6Demo15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib6Demo15Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib6Demo15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
