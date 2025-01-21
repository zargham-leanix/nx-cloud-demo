import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib6Demo41Component } from './lib6-demo41.component';

describe('Lib6Demo41Component', () => {
  let component: Lib6Demo41Component;
  let fixture: ComponentFixture<Lib6Demo41Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib6Demo41Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib6Demo41Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
