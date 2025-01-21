import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib6Demo8Component } from './lib6-demo8.component';

describe('Lib6Demo8Component', () => {
  let component: Lib6Demo8Component;
  let fixture: ComponentFixture<Lib6Demo8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib6Demo8Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib6Demo8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
