import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib6Demo39Component } from './lib6-demo39.component';

describe('Lib6Demo39Component', () => {
  let component: Lib6Demo39Component;
  let fixture: ComponentFixture<Lib6Demo39Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib6Demo39Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib6Demo39Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
