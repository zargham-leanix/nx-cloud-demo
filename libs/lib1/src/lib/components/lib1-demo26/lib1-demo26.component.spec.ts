import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib1Demo26Component } from './lib1-demo26.component';

describe('Lib1Demo26Component', () => {
  let component: Lib1Demo26Component;
  let fixture: ComponentFixture<Lib1Demo26Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib1Demo26Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib1Demo26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
