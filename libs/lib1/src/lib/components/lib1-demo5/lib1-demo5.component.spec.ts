import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib1Demo5Component } from './lib1-demo5.component';

describe('Lib1Demo5Component', () => {
  let component: Lib1Demo5Component;
  let fixture: ComponentFixture<Lib1Demo5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib1Demo5Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib1Demo5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
