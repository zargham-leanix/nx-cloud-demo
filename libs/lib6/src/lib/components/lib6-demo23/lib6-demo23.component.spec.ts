import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib6Demo23Component } from './lib6-demo23.component';

describe('Lib6Demo23Component', () => {
  let component: Lib6Demo23Component;
  let fixture: ComponentFixture<Lib6Demo23Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib6Demo23Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib6Demo23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
