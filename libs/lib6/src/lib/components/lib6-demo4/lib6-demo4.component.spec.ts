import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib6Demo4Component } from './lib6-demo4.component';

describe('Lib6Demo4Component', () => {
  let component: Lib6Demo4Component;
  let fixture: ComponentFixture<Lib6Demo4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib6Demo4Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib6Demo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
