import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib6Demo19Component } from './lib6-demo19.component';

describe('Lib6Demo19Component', () => {
  let component: Lib6Demo19Component;
  let fixture: ComponentFixture<Lib6Demo19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib6Demo19Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib6Demo19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
