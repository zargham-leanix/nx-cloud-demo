import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib6Demo44Component } from './lib6-demo44.component';

describe('Lib6Demo44Component', () => {
  let component: Lib6Demo44Component;
  let fixture: ComponentFixture<Lib6Demo44Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib6Demo44Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib6Demo44Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
