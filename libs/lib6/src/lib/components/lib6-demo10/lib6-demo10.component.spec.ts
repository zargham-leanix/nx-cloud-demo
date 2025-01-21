import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib6Demo10Component } from './lib6-demo10.component';

describe('Lib6Demo10Component', () => {
  let component: Lib6Demo10Component;
  let fixture: ComponentFixture<Lib6Demo10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib6Demo10Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib6Demo10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
